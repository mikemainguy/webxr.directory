import styles from "@/styles/Home.module.css";

export default function Form() {
    return (
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
        </form>)
}