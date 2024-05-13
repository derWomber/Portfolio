document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons
    const downloadButton1 = document.getElementById('downloadButton1');
    const downloadButton2 = document.getElementById('downloadButton2');

    // Add click event listeners
    downloadButton1.addEventListener('click', function() {
        // Create a link element
        const link = document.createElement('a');
        // Set the href attribute to the file you want to download
        link.href = 'files/Youssef_Beddouch_Bewerbungsmappe.pdf';
        // Set the download attribute to specify the filename
        link.download = 'Youssef_Beddouch_Bewerbungsmappe.pdf';
        // Append the link to the body
        document.body.appendChild(link);
        // Programmatically trigger a click event to start the download
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    });

    downloadButton2.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'files/Empfehlungsschreiben.pdf';
        link.download = 'Empfehlungsschreiben.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
