export function ContNovedad (props){

    const {title,subtitle,author,body} = props

    return (
        <div style={{widht:'300px', padding:'20px', borderRadius: '15px', backgroundColor:'grey', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', margin:'20px'}}>

            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <h4>{author}</h4>
            <h5>{body}</h5>
        </div>
    )
}