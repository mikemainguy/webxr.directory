import {useState} from "react";
import styles from "@/styles/Home.module.css";
import {Button, Popover} from "@mui/material";

export default function Form() {

    const handleClick = (event) => {
        setOpen(true);
    };
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button id="addButton" onClick={handleClick}>Add Site</Button>

            <Popover id="addPop" open={open}>
                <form className={styles.inputForm} action="/api/add" method="post">
                    <label className={styles.inputLabel} htmlFor="url">URL</label>
                    <input className={styles.input}
                           type="text"
                           id="url"
                           name="url"
                           required/>

                    <label className={styles.inputLabel} htmlFor="description">Description</label>
                    <textarea className={styles.input}
                              id="description"
                              name="description"
                              required/>
                    <button className={styles.description} type="submit">Submit</button>
                </form>
            </Popover>
        </div>)
}