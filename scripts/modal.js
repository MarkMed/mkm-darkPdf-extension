whiteout = () => {

    const textContent = {
        msg: "Adjust the sliders ",
        modalTitle: "MkM DarkPdf Config"
    }

    const renderModal = () => {
        let modalWrap = document.createElement('div');
        modalWrap.id = "mkm_modalWrapper";
        modalWrap.classList.add("smoothTransition")
        modalWrap.innerHTML = `
            <div class="noMarginPadding smoothTransition" id="mkm_modalContainer" >
                <div class="noMarginPadding modalHeader">
                    <h1 class="noMarginPadding titleContainer">${textContent.modalTitle}</h1>
                    <div id="mkm_closeBtn">X</div>
                </div>
                <div class="noMarginPadding" id="mkm_modalContent">
                    
                    <div id="textContent" >${textContent.msg}</div>
                    <div>
                        <button id="mkm_btn">Default</button>
                    </div>
                </div>
            </div>
            <script src="./main.js"></script>
        `
        document.body.appendChild(modalWrap);

        document.getElementById("mkm_closeBtn").addEventListener("click", () => {
            const modalContent = document.getElementById("mkm_modalContainer");
            const modalWrapper = document.getElementById("mkm_modalWrapper");
            // modalContent.style.opacity = "0";
            modalContent.style.transform = "translateY(250px)";
            modalWrapper.style.opacity = "0";
            setTimeout(() => {
                modalWrapper.style.display = "none";
            }, 500);
            // document.body.style.filter = "invert(1)";
        });

        document.getElementById("mkm_btn").addEventListener("click", () => {
            applyFilters(1, 0.7, 0.4)
        })
    }

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
    const localFetchTest = () => {
        console.log("doing API Call...")

        console.log("AAAAH TEXT HERE! ", localModalContent)
        document.querySelector("#mkm_modalContent #textContent").innerHTML = localModalContent

        console.log("API Call done")

    }

    renderModal();
}

whiteout();
