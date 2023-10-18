// Inject the CSS styles into the document
const style = document.createElement('style');
style.innerHTML = `
    .liquify-badge {
        white-space: nowrap;
        cursor: pointer;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1);
        visibility: visible !important;
        z-index: 2147483647 !important;
        color: #aaadb0 !important;
        opacity: 1 !important;
        width: auto !important;
        height: auto !important;
        background-color: #fff !important;
        border-radius: 3px !important;
        margin: 0 !important;
        height: 32px !important;
        text-decoration: none !important;
        display: inline-block !important;
        position: fixed !important;
        top: auto !important;
        bottom: 12px;
        left: auto !important;
        right: 12px !important;
        overflow: visible !important;
        transform: none !important;
    }
`;
document.head.appendChild(style);

// Fetch the SVG content from the URL
fetch('https://uploads-ssl.webflow.com/64be309a0c8ae7454454fcef/6530171402c93f290830bd0e_Liquify%20Badge.svg')
    .then(response => response.text())
    .then(svgContent => {
        console.log("SVG fetched successfully.");

        // 1. Check if .w-webflow-badge exists
        const webflowBadgeExists = document.querySelector('.w-webflow-badge') !== null;

        // Log the presence or absence of the .w-webflow-badge
        if (webflowBadgeExists) {
            console.log(".w-webflow-badge exists.");
        } else {
            console.log(".w-webflow-badge does not exist.");
        }

        // 2. Create the .liquify-badge element and add the fetched SVG content inside
        const liquifyBadge = document.createElement('div');
        liquifyBadge.className = 'liquify-badge';
        liquifyBadge.innerHTML = svgContent;

        // 3. If .w-webflow-badge exists, adjust the position of .liquify-badge to be offset from the top
        if (webflowBadgeExists) {
            liquifyBadge.style.bottom = "50px";  // Adjust as needed to avoid overlap
        }

        // 4. Add the .liquify-badge to the DOM
        document.body.appendChild(liquifyBadge);
    })
    .catch(error => {
        console.error('Error fetching the SVG:', error);
    });
