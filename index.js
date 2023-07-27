let BF;
function convertFileToBinary() {
    const fileInput = document.getElementById("fileInput");
    
    // Check if a file was selected
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            // The 'event' object contains the binary data as 'result'
            const Buffer = event.target.result;
            BF = Buffer
            // Here, you can use 'Buffer' for further processing or transmission.
            const blob = new Blob([Buffer],{type:'image/png'})
            const url =  URL.createObjectURL(blob)
            Display(url);            
        };

        // Read the file as binary data
        reader.readAsArrayBuffer(file);
    } else {
        alert("Please select a file.");
    }

}


function Display(url){
    const container = document.createElement('div');
    container.innerHTML = `
    <p color='red'><B>Successfully upladed the image /we can also use this methode to upload it on mongoDB</B></p>
    <img src=${url} />
    `
    document.querySelector('body').append(container);
}  