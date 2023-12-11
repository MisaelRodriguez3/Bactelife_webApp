import Cases from '../models/caseStudies.model.js';

export const getCase = async (req, res) => {
    try {
        const oneCase = await Cases.findById(req.params.id);
        if (!oneCase) {
            return res.status(404).json('this case does not exist')
        }
        res.json(oneCase)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
}

export const getCases = async (req, res) => {
    try {
        const cases = await Cases.find();
        res.json(cases)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const createCase = async (req, res) => {
    const { title, description, tag, imageURL } = req.body;

    try {
        const newCase = new Cases({
            title,
            description,
            tag,
            imageURL
        });
        await newCase.save();
        res.json(newCase);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const deleteCase = async (req, res) => {
    try {
        const oneCase = await Cases.findByIdAndDelete(req.params.id);
        if (!oneCase) {
            return res.status(404).json('this case does not exist')
        }
        res.json('Case deleted')
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};

export const updateCase = async (req, res) => {
    try {
        const oneCase = await Cases.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!oneCase) {
            return res.status(500).json({ error: 'There was an internal server error' });
        }
        res.json(oneCase)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'There was an internal server error' });
    }
};