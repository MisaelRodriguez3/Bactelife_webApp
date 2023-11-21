import Member from '../models/members.model.js';

export const getMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) {
            return res.status(404).json('this member does not exist')
        }
        res.json(member);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const addMember = async (req, res) => {
    const { name, last_name, position, about, imageURL } = req.body;
    try {
        const newMember = new Member({
            name,
            last_name,
            position,
            about,
            imageURL
        });
        await newMember.save();
        res.json(newMember);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) {
            return res.status(404).json('this member does not exist');
        }
        res.json('memeber deleted')
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const updateMember = async (req, res) => {
    try {
        const memeber = await Member.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!memeber) {
            return res.status(404).json('this member does not exist');
        }
        res.json(memeber);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};