import { LinkBox } from "../components/LinkBox";
import {ROUTES} from "../routes.js"

export function TestPage(){
    return <div className="flex flex-col justify-center items-center">
        <LinkBox title={"Documentation"} description={"Read the guides references and integration details"} href={ROUTES.ABOUT} />
    </div>
}