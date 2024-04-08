
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  $('input').on('change', function() {
      $('body').toggleClass('blue');
    }); 


// Functionalitatea pentru Sectiunea 2- Products //

function showDescription(button) {
    var descriereCompleta = button.getAttribute("data-descriere-completa");
    var parinteDiv = button.parentNode;
    var initialDescription = parinteDiv.querySelector(" .initial-description");

    initialDescription.textContent += descriereCompleta;

    button.style.display = "none";

    var backButton = document.createElement("button");
    backButton.textContent = "Show less";
    backButton.classList.add("back-btn");
    backButton.onclick = function() {
        initialDescription.textContent = initialDescription.textContent.replace(descriereCompleta, "");
        button.style.display = "block";
        backButton.remove();
    }

    parinteDiv.appendChild(backButton);
}

