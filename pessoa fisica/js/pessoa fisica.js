const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");


let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";

   
}


/*Modificação de escrita na area de corfimar termos*/
const mensagem1 = document.getElementById("mensagem1");
        const mensagem2 = document.getElementById("mensagem2");
        const mensagem3 = document.getElementById("mensagem3");
        const botaoTrocar = document.getElementById("trocarMensagem");
        

        botaoTrocar.addEventListener("click", () => {
            if (mensagem1.style.display === "block") {
                mensagem1.style.display = "none";
                mensagem2.style.display = "block";
                mensagem3.style.display = "none";
            } else {
                mensagem1.style.display = "block";
                mensagem2.style.display = "none";
                mensagem3.style.display = "none";
            }
        });


/*fim*/

document.addEventListener("DOMContentLoaded", function () {
  const formSteps = document.querySelectorAll(".form-step");
  let currentStep = 1; // Começa na primeira etapa (etapa1)

  // Função para mostrar a etapa atual e ocultar as outras
  function showStep(stepNumber) {
      formSteps.forEach((step) => {
          step.style.display = "none";
      });

      const currentStepElement = document.getElementById(`etapa${stepNumber}`);
      if (currentStepElement) {
          currentStepElement.style.display = "block";
      }
  }

  // Evento para avançar para a próxima etapa
  document.querySelector("#nextBtn").addEventListener("click", function () {
      currentStep++;
      if (currentStep > 4) {
          currentStep = 4;
      }
      showStep(currentStep);
  });

  // Evento para voltar para a etapa anterior
  document.querySelector("#prevBtn").addEventListener("click", function () {
      currentStep--;
      if (currentStep < 1) {
          currentStep = 1;
      }
      showStep(currentStep);
  });

  // Mostrar a primeira etapa inicialmente
  showStep(currentStep);
});
