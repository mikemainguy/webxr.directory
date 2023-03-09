import algoliasearch from "algoliasearch";
import {InfiniteHits, InstantSearch, SearchBox} from "react-instantsearch-hooks-web";
import {Card, CardActions, CardContent, CardHeader, CardMedia, Link} from "@mui/material";


const searchClient = algoliasearch('4CUN9U9LK4', 'b0b81bbac9caba937a15d691ebe03e19');
const Hit = ({hit}) => {
    return (
        <Card variant="outlined">


            <CardHeader title={hit.title}></CardHeader>
            <CardActions><Link href={hit.url}>{hit.url}</Link></CardActions>
            <CardContent>
                {hit.image &&
                    <img src={'https://media.webxr.directory/' + hit.objectID } width="100" height="100"/>
                }

                {hit.description}
                <p>{hit.author}</p>
            </CardContent>




        </Card>
    )
}
export default function SearchForm() {
    return (
        <InstantSearch indexName="xrdirectory" searchClient={searchClient}>
            <SearchBox>

            </SearchBox>
            <div>
                <InfiniteHits hitComponent={Hit}/>
            </div>
        </InstantSearch>
    )
}