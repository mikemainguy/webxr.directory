import styles from "@/styles/Home.module.css";
import algoliasearch from "algoliasearch";
import {Hits, InstantSearch, SearchBox, InfiniteHits} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch('4CUN9U9LK4', 'b0b81bbac9caba937a15d691ebe03e19');
const Hit = ({hit}) => {
    return (
        <div className={styles.hit}>
            <h2 className={styles.hitTitle}>{hit.title}</h2>
            {hit.image &&
                <img src="" width="100" height="100"/>
            }
            <div>
                <a className={styles.hitLink} href={hit.url}>{hit.url}</a>
                <p className={styles.description}>{hit.description}</p>
                <p className={styles.description}>{hit.author}</p>
            </div>

        </div>
    )
}
export default function SearchForm() {
    return (
        <InstantSearch indexName="xrdirectory" searchClient={searchClient}>
            <SearchBox>

            </SearchBox>
            <div className={styles.grid}>
                <InfiniteHits hitComponent={Hit}/>
            </div>
        </InstantSearch>
    )
}