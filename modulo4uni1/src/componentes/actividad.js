
export function ProbandoTitulo (props) {
    return (
        <header>
            <h1 style={{fontFamily: 'cursive', textAlign: 'center'}}>Titulo de la Actividad</h1>
            <div style={{color: 'black', backgroundColor: 'white', padding: '10px'}}><h2>{props.subtitulo}</h2>

            </div>
        </header>
    )
}