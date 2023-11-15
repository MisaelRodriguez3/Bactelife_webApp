import Auth from '../models/auth.model.js';
import { ROOT, PASSWORD, SECRET_KEY } from '../config.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { user, password } = req.body;
    try {
        const passHash = await bcrypt.hash(password, 10)
        const newUser = new Auth({
            user,
            password: passHash
        });

        const userSaved = await newUser.save();
        const token = await createAccesToken({ id: userSaved._id });
        res.cookie('token', token);
        res.json('User created successfully');
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const login = async (req, res) => {
    const { user, password } = req.body;
    try {
        if (user === ROOT && password === PASSWORD) {
            const token = await createAccesToken({ id: 0 });
            res.cookie('token', token);
            return res.json('Root admin')
        }
        const userFound = await Auth.findOne({ user });
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!userFound || !isMatch) {
            return res.json({ error: 'incorrect data' });
        }
        const token = await createAccesToken({ id: userFound._id });
        res.cookie('token', token);
        res.json(userFound);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie('token', null, { expires: new Date(0) });
        res.json({ message: 'Logout successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const getAdmins = async (req, res) => {
    try {
        const admins = await Auth.find();
        res.json(admins);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
}

export const deleteAdmin = async (req, res) => {
    try {
        const admin = await Auth.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).json({ error: 'this member does not exist' });
        }
        res.json('admin deleted')
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const admin = await Auth.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!admin) {
            return res.status(404).json('this member does not exist');
        };
        res.json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
}

//En revision

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json('Unauthorized');
    }

    jwt.verify(token, SECRET_KEY, async (err, user) => {
        if (err) {
            return res.status(401).json('Unauthorized');
        }
        if (user === ROOT) {
            return res.json('Root admin')
        }
        const userFound = await Auth.findById(user.id);
        if (!userFound) {
            return res.status(401).json('Unauthorized');
        }
        return res.json(userFound)
    })
}