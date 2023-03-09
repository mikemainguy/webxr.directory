import {useState} from "react";
import {Button, Dialog, DialogActions, List, ListItem, TextField} from "@mui/material";


export default function Form() {

    const handleClick = (event) => {
        setOpen(true);
    };
    const handleClose = (event) => {
        setOpen(false);
    }
    const [open, setOpen] = useState(false);
    const AddButton = () => {
        return (
            <Button id="addButton" onClick={handleClick}>Add New Site</Button>
        )
    }
    return (
        <div>

            <AddButton></AddButton>
            <Dialog fullWidth maxWidth="lg" id="addPop" open={open}>
                <form  action="/api/add" method="post" enctype="multipart/form-data">
                    <List>

                        <ListItem><TextField fullwidth id="url" name="url" label="URL" variant="outlined"/></ListItem>
                        <ListItem><input type="file" id="image" name="image" label="Preview Image" /></ListItem>
                        <ListItem><TextField fullwidth id="description" name="description" label="Description" multiline
                                             minRows={3}
                                             maxRows={20} variant="outlined"/></ListItem>
                        <ListItem><TextField fullwidth id="author" name="author" label="author" variant="outlined"/></ListItem>
                        <ListItem><Button fullWidth type="submit" variant="outlined">Submit</Button></ListItem>

                    </List>

                </form>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>)
}