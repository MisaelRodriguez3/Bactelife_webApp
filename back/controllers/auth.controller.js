import Auth from '../models/auth.model.js';
import { ROOT, PASSWORD } from '../config.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';

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
            return res.json('incorrect data');
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
