

document.getElementById("add_food_button").addEventListener("click", function() {
  document.getElementById("exercise_show").textContent = "Alguns alimentos foram adicionados"
  let output = "";
  output = `<div id="adicionando">
    <div style="display: flex;padding-left : 60px;font-size : 15px ; font-weight : bold ;"><p style="text-align: center;">Nome do alimento: 
 <p>${document.getElementById("food_input").value}</p></p></div>
    <div style="display: flex;padding-left : 60px;"><p>Quantidade : </p><input type="text" id="how_much"/></div>
    <div style="display: flex;padding-left : 60px;"><p>Adicionar na refeição : </p><input type="text" id="which_meal"/></div>
    <div style="display: flex;"><button class="food_container__search_button" id="food_added" style="padding:10px 25px ;margin-top: 20px;">Adicionar Alimento</button><button class="food_container__search_button" style="padding:10px 25px ;margin-left: 90px;margin-top: 20px;">Informação Nutricional</button></div>
    </div>`
  document.getElementById("food_form_container").innerHTML = output
  document.getElementById("food_information").innerHTML = `<li>${document.getElementById("food_input").value}</li>`

  document.getElementById("food_added").addEventListener("click", function() {
    var food_info = JSON.parse(localStorage.getItem("food_info")) || []
    food_info.push({
      food: document.getElementById("food_input").value,
      quantity: document.getElementById("how_much").value,
      meal_name: document.getElementById("which_meal").value,
      Carboidrato: 0,
      Gorduras: 0,
      Proteinas: 0,
      Sodio: 0,
      Açucar: 0,
      cal: 125
    })
    console.log(food_info)
    localStorage.setItem("food_info", JSON.stringify(food_info))
  })
})