import Resource from '../models/Resource.js';

// GET all resources
const getResources = async (req, res) => {
    try {
        const resources = await Resource.find({});
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET single resource by ID
const getResource = async (req, res) => {
    try {
        const { id } = req.params;
        
        const resource = await Resource.findById(id);
        
        if (!resource) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE new resource
const createResource = async (req, res) => {
    const { title, type, url, description, subject } = req.body;
    
    try {
        const resource = await Resource.create({ 
            title, 
            type, 
            url, 
            description, 
            subject, 
            user_id: req.user._id 
        });
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// UPDATE resource
const updateResource = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        const resource = await Resource.findByIdAndUpdate(id, updates, { new: true });
        
        if (!resource) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        
        res.status(200).json(resource);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE resource
const deleteResource = async (req, res) => {
    const { id } = req.params;
    
    try {
        const resource = await Resource.findByIdAndDelete(id);
        if (!resource) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        res.status(200).json(resource);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET resources by current user
const getMyResources = async (req, res) => {
    try {
        const resources = await Resource.find({ user_id: req.user._id });
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET resources by subject
const getResourcesBySubject = async (req, res) => {
    try {
        const { subject } = req.params;
        const resources = await Resource.find({ 
            subject: { $regex: subject, $options: 'i' } 
        });
        
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Export all functions
export { 
    createResource, 
    getResources, 
    getResource,
    updateResource,
    deleteResource,
    getMyResources,
    getResourcesBySubject
};