document.addEventListener('DOMContentLoaded', function() {
    
    const downloadButton1 = document.getElementById('downloadButton1');
    const downloadButton2 = document.getElementById('downloadButton2');


    downloadButton1.addEventListener('click', function() {

        const link = document.createElement('a');
        
        link.href = 'files/Youssef_Beddouch_Lebenslauf.pdf';
        
        link.download = 'Youssef_Beddouch_Lebenslauf.pdf';
        
        document.body.appendChild(link);
         
        link.click();
        
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
