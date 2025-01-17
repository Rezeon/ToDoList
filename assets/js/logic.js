const dateElement = document.getElementById('currentDate');

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateElement.textContent = today.toLocaleDateString('id-ID', options)


function showP() {
  const showProfil = document.getElementById('Pbtn')
  const showAdd = document.getElementById('Tbtn')
  const showTbtn = document.getElementById('showTbtn')
  const showPbtn = document.getElementById('showPbtn')

  showProfil.style.zIndex = 1;
  showAdd.style.zIndex = 0;
  showPbtn.style.backgroundColor = '#727D73';
  showTbtn.style.backgroundColor = '#AAB99A';

  const currentZindex = parseInt(window.getComputedStyle(showProfil).zIndex, 10) || 0;
  showProfil.style.zIndex = currentZindex + 1;


}
function showT() {
  const showAdd = document.getElementById('Tbtn')
  const showProfil = document.getElementById('Pbtn')
  const showTbtn = document.getElementById('showTbtn')
  const showPbtn = document.getElementById('showPbtn')

  showProfil.style.zIndex = 0;
  showAdd.style.zIndex = 1;
  showPbtn.style.backgroundColor = '#AAB99A';
  showTbtn.style.backgroundColor = '#727D73';

  const currentZindex = parseInt(window.getComputedStyle(showAdd).zIndex, 10) || 0;
  showAdd.style.zIndex = currentZindex + 1;

  console.log(`Z-Index sekarang: ${showAdd.style.zIndex}`);

}

function addTodo() {
  const inputList = document.getElementById('input1')
  const classList = document.getElementById('class')
  const ToList = document.getElementById('todolist')
  const jumlahList = document.getElementById('jumlahList')

  function updateTaskCount () {
    const par = ToList.getElementsByTagName("li").length;
    jumlahList.textContent = `Sisa Task: ${par + 1}`;
  }
  updateTaskCount();

  const tanggal = today.toLocaleDateString('id-ID', options)

  const task = inputList.value.trim();
  const difficulty = classList.value;
  
  let par = 0;
  if (task === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }
  
  const listToDo = document.createElement("li");
  listToDo.textContent = task;
  listToDo.classList.add(difficulty);
  
  const listDiff = document.createElement("p");
  listDiff.textContent = difficulty;
  
  const dateD = document.createElement("h6");
  dateD.className = "tanggal"
  dateD.textContent = tanggal
  
  const remBtn = document.createElement("button");
  remBtn.textContent = ("X")
  remBtn.className = "remBtn"
  remBtn.onclick = function () {
    ToList.removeChild(listToDo);
    updateTaskCount();
    if (checkBox && checkBox.checked) {
    } else {
      alert("Anda membuang tugas yang belum selesai.");
    }
    
  };
  const checkBox = document.createElement("input")
  checkBox.type = "checkbox";
  checkBox.className = "todoBox"
  checkBox.onclick = function () {
    if (checkBox.checked) {
      listToDo.style.textDecoration = "line-through";
      listToDo.style.textDecorationThickness = "3px";
      listToDo.style.textDecorationColor = "black";
      listToDo.style.opacity = "0,6";

    } else {
      listToDo.style.textDecoration = "none";
      listToDo.style.opacity = "1";
    }
  }

  ToList.appendChild(listToDo);
  listToDo.appendChild(listDiff);
  listToDo.appendChild(remBtn);
  listToDo.appendChild(dateD);
  listToDo.appendChild(checkBox);

  console.log(ToList);
  inputList.value = "";
}
