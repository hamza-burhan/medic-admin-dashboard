import "../Styles/Divider.css"
export default function Divider(props) {
    return (
        <div className="astrodivider">
            <div className="astrodividermask" style={{ boxShadow: props.color }}></div>
        </div>
    )
}