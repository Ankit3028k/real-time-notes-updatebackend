import Note from "../Models/noteModel.js";


export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    console.error("Error in createNote controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};



export const getNotes = async (req, res) => {
  try {
    
     const note = await Note.findById(req.params.id)
   
 if (!note) {
      return res.status(500).json({ success: false });
    }

    // If the note is found, return it
  
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getnotes controller: ", error.note);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const updateNote = async (req, res) => {
  try {
    // Find the note by ID and update it with the request body
    const note = await Note.findByIdAndUpdate(
      req.params.id,
        req.body,
        { new: true } // Return the updated note
    );
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    // If the note is updated successfully, return it
    res.status(200).json(note);
    }
    catch (error) {
    console.log("Error in updateNote controller: ", error);
    res.status(500).json({ error: "Internal server error" });
    }
}
