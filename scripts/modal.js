whiteout = () => {
  const textContent = {
    modalTitle: "MkM DarkPdf Config",
    preview: "Result Preview",
    settings: "Settings",
    buttons: {
      off: "Turn Off",
      def: "Default",
      apply: "Apply",
    },
  };

  const renderModal = () => {
    let modalWrap = document.createElement("div");
    let closeBtn;
    let resultPreviewElem;
    modalWrap.id = "mkm_modalWrapper";
    modalWrap.classList.add("smoothTransition");
    modalWrap.innerHTML = `
            <div class="noMarginPadding smoothTransition" id="mkm_modalContainer" >
                <div class="noMarginPadding modalHeader">
                    <h1 class="noMarginPadding titleContainer">${textContent.modalTitle}</h1>
                    <div id="mkm_closeBtn">X</div>
                </div>
                <div id="resultPreview" class="noMarginPadding previewSec">
                    <h3 class="noMarginPadding titleContainer">${textContent.preview}</h3>
                    <div id="previewContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolores quas sunt, obcaecati pariatur consequuntur asperiores molestias ullam? Repudiandae eum enim vero perspiciatis laudantium reiciendis expedita porro nisi saepe? Placeat?
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolores quas sunt, obcaecati pariatur consequuntur asperiores molestias ullam? Repudiandae eum enim vero perspiciatis laudantium reiciendis expedita porro nisi saepe? Placeat?
                        <br/>
                        <br/>
                        Beatae dolores quas sunt, obcaecati pariatur consequuntur asperiores molestias ullam?
                    </div>
                </div>
                <div class="noMarginPadding settingsSec">
                    
                    <h2 class="noMarginPadding">${textContent.settings}</h2>
                    <div id="inputContainer">
                        input section
                    </div>
                    <div id="buttonContainer">
                        <button class="ghost" id="mkm_btn_off">${textContent.buttons.off}</button>
                        <button id="mkm_btn_Default">${textContent.buttons.def}</button>
                        <button id="mkm_btn_Apply">${textContent.buttons.apply}</button>
                    </div>
                </div>
            </div>
            <script src="./main.js"></script>
        `;
    document.body.appendChild(modalWrap);
    closeBtn = document.getElementById("mkm_closeBtn");
    resultPreviewElem = document.getElementById("resultPreview")
    closeBtn.addEventListener("click", () => {
      if (!closeBtn.getAttribute("disabled")) {
        const modalContent = document.getElementById("mkm_modalContainer");
        const modalWrapper = document.getElementById("mkm_modalWrapper");
        // modalContent.style.opacity = "0";
        modalContent.style.transform = "translateY(250px)";
        modalWrapper.style.opacity = "0";
        setTimeout(() => {
          modalWrapper.style.display = "none";
        }, 500);
        closeBtn.setAttribute("disabled", "true");
        // document.body.style.filter = "invert(1)";
      }
    });

    document.getElementById("mkm_btn_off").addEventListener("click", () => {
      applyFilters(0, 0, 1, 0);
      resultPreviewElem.style.filter = `grayscale(0) invert(0) brightness(1) sepia(0)`;
    });

    document.getElementById("mkm_btn_Default").addEventListener("click", () => {
      applyFilters(
        defaultValues.grayscaleValue,
        defaultValues.invertValue,
        defaultValues.brightnessValue,
        defaultValues.sepiaValue
      );
      resultPreviewElem.style.filter = `grayscale(${defaultValues.grayscaleValue}) invert(${defaultValues.invertValue}) brightness(${defaultValues.brightnessValue}) sepia(${defaultValues.sepiaValue})`;
    });

    document.getElementById("mkm_btn_Apply").addEventListener("click", () => {
      applyFilters(
        defaultValues.grayscaleValue,
        defaultValues.invertValue,
        defaultValues.brightnessValue,
        defaultValues.sepiaValue
      );
      resultPreviewElem.style.filter = `grayscale(${defaultValues.grayscaleValue}) invert(${defaultValues.invertValue}) brightness(${defaultValues.brightnessValue}) sepia(${defaultValues.sepiaValue})`;
    });
  };

  // const fetchTest = () => {
  //     // const fileId = "1_zJfSu-XP_Z6YRP3UnFsSiecS9kDOO0j";
  //     // const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  //     const url = "https://nus2slhkugad001.blob.core.windows.net/test/extension-settings.json?sp=r&st=2023-06-14T19:09:17Z&se=2025-06-15T03:09:17Z&spr=https&sv=2022-11-02&sr=b&sig=km3oU4lbbXDGBP3RnHRYNWILgMK6kjgzIZGJrWDdGyI%3D"
  //     // const proxyURL = "https://cors-anywhere.herokuapp.com/";
  //     console.log("doing API Call...")

  //     // fetch(proxyURL + url)
  //     fetch(url)
  //         .then(res => {
  //             console.log("res: ", res);
  //             return res;
  //         })
  //         .then(data => {
  //             console.log("result: ", data)
  //         })
  //         .catch(err => {
  //             console.log("Err: ", err);
  //         })

  //     console.log("API Call done")

  // }

  renderModal();
};

whiteout();
