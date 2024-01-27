function postFirstComment() {
  let comment = $("#commentFirstInput").val();
      let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
      $('#firstComment').append(temp_html)
        //initialization the input box
      document.getElementById('commentFirstInput').value = null

}