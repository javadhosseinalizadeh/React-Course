// function components most be pascalCase

/*
function component() {
    ...
    return jsx
}

const component = () => {
    .....
    return jsx
}

*/
const styleForDiv = {
    backgroundColor: '#ccc',
    textAlign: 'center',
    padding: '32px',
    marginBottom: '20px',

}

export const FunctionComponent1 = () => {
    return (
        <div style={styleForDiv}>
            <h2>Hello from function component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nemo fugit numquam maxime consectetur dolorem quisquam, vitae impedit sapiente velit eaque voluptatum qui tempore amet ratione soluta cumque. Earum, debitis?</p>
        </div>
    );
}
export const FunctionComponent2 = (props) => {
    return (
        <div style={styleForDiv}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
               {props.children}
        </div>
    );
}

export const FunctionComponent3 = ({title = 'react', message, children}) => {
    return (
        <div style={styleForDiv}>
            <h2>{title}</h2>
            <p>{message}</p>
            {children}
        </div>
    );
}

export const ImportantText = ({ content }) => {
    return (
        <p>
            <strong>{content}</strong>
        </p>
    )
}