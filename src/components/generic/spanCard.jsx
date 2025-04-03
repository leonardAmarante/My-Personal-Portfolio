// SpanCard component that applies dynamic styling based on the text prop
export default function SpanCard(props) {
    // Variable to hold the background color based on the text prop
    let backgroundColor;

    // Switch statement to assign a background color based on the 'text' prop
    switch (props.text) {
        case "Javascript":
            backgroundColor = "rgb(255, 193, 7)"; // Yellow for Javascript
            break;
        case "ReactJs":
            backgroundColor = "rgb(0, 123, 255)"; // Blue for ReactJs
            break;
        case "Html":
            backgroundColor = "rgb(255, 165, 0)"; // Orange for HTML
            break;
        case "Css":
            backgroundColor = "rgb(88, 53, 184)"; // Purple for CSS
            break;
        case "Boostrap":
            backgroundColor = "rgb(122, 83, 230)"; // Blue-purple for Bootstrap
            break;
        default:
            backgroundColor = "transparent"; // Default color if no match
    }

    // Style object for the span element
    const spanStyle = {
        backgroundColor: backgroundColor, // Apply dynamic background color
        border: "none", // No border
        borderRadius: "10px", // Rounded corners
        padding: "5px" // Padding inside the span
    };

    // Return the span element with the dynamic styles
    return (
        <span style={spanStyle}>{props.text}</span>
    );
}