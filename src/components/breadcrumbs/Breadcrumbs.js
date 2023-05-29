import { Link } from "react-router-dom"

import './breadcrumbs.css'

const Breadcrumbs = () => {

    function renderBreadcrumbElement(data) {

        let location = ''
        const items = data.split('/').map((item, i) => {

            location += `${item}/`
            if (item == '') {
                return
            } else {
                return (
                    <li className="breadcrumb__list-item "
                        key={i}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem">
                        <Link itemProp="item" to={location} >
                            <span itemProp="name">{item}</span>
                        </Link>
                        <meta itemProp="position" content={i} />
                    </li>
                )
            }
        })
        return (
            <ol className="breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
                {items}
            </ol>
        )
    }
    const element = renderBreadcrumbElement(window.location.pathname)
    return (
        <div className="breadcrumb">
            {element}
        </div>
    )
}
export default Breadcrumbs;