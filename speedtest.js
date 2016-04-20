  /**
   * Estimate broadband Speed in Mb
   *
   */
  function estimateBroadBandSpeed() {

    var initialDate = new Date,
        xhttp;

    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {

      if (xhttp.readyState == 4) {
        if(xhttp.status == 200){
          var uploadedDate = new Date,
              time = Math.round((uploadedDate.getTime() - initialDate.getTime())) / 1000,
              connSpeed = Math.round((xhttp.responseText.length / time) / 1048576);

              console.log('file size '+ xhttp.responseText.length+', Download time '+time +', at '+connSpeed +' mb per sec' )

        } else {
          console.log('houston we have a problem')
        }
      }
    };

    xhttp.open("GET", "test.txt?s="+initialDate.getTime(), true);
    xhttp.send();

  }
