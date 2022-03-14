
interface HabilidadeProps {
    colortheme: boolean;
}

export const Habilidade = (props: HabilidadeProps) => {
    return (
        <>
            <div>
                {props.colortheme ? (
                    <h1 style={{ color: 'pink' }}>Habilidades</h1>

                ) : (
                    <h1 style={{ color: 'blue' }}>Habilidades</h1>
                )}
            </div>
        </>
    )
}
