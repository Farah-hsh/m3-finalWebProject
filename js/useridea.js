document.addEventListener("DOMContentLoaded", function() {
          const form = document.getElementById("idea-form");
          const patentTypeCheckboxes = document.querySelectorAll("#patentType input[type='checkbox']");
          const selectedCountriesDiv = document.getElementById("selectedCountries");
        
          patentTypeCheckboxes.forEach(checkbox => {
              checkbox.addEventListener("change", function() {
                  const selectedCountries = Array.from(patentTypeCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
                  selectedCountriesDiv.innerHTML = selectedCountries.map(country => `<div>${country}</div>`).join('');
              });
          });
        
          form.addEventListener("submit", function(event) {
              event.preventDefault();
              const formData = new FormData(form);
              const imageFile = formData.get("image");
              const selectedCountries = Array.from(patentTypeCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
              
              const data = {
                  name: formData.get("name"),
                  description: formData.get("description"),
                  patentType: selectedCountries,
              };
              //the mock call for hte api
              fetch("https://65082eef56db83a34d9be320.mockapi.io/IDEAS", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
              })
              .then(response => response.json())
              .then(data => {
                  console.log("Idea submitted successfully:", data);
              })
              .catch((error) => {
                  console.error("Error:", error);
              });
          });
        });
        