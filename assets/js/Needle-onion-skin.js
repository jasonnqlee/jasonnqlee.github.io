document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("onionSlider");

    const currentImage =
        document.getElementById("onionCurrent");

    const previousImage =
        document.getElementById("onionPrevious");

    const iterationNumber =
        document.getElementById("iterationNumber");

    const detailTitle =
        document.getElementById("detailTitle");

    const detailMeta =
        document.getElementById("detailMeta");

    const detailDesc =
        document.getElementById("detailDesc");


    /*
     * ========================================
     * ITERATION DATA
     * ========================================
     */

    const iterations = [

        {
            image: "images/NeedleCap/Iteration-0.png",

            title: "Existing Baseline Design",

            meta: "Material: 0.05 cubic inches, Deflection: 0.2073 inches",

            description:
                "<p>+ Baseline design from Insulet. Reliable and proven. Baseline for subsequent optimization.</p>"
        },


        {
            image: "images/NeedleCap/Iteration-1.png",

            title: "W design V1",

            meta: "Material Savings: 18.02%, Stiffness Loss: 21.71%",

            description:
                `
        <ul class="onion-list">
            <li class="pro"> W-shape design keeps central area wide, while outer prongs help support it during linear feeding</li>
            <li class="pro"> Avoids mold fill ability issues</li>
            <li class="pro"> Back area has some cuts as material cut there seems less impactful to overall stiffness (due to fixed points at stakes)</li>
            <li>– Concerned that it could tip over in the linear rail, which could lead to jams.</li>
        </ul>
    `
        },


        {
            image: "images/NeedleCap/Iteration-2.png",

            title: "W design V2",

            meta: "Material Savings: 20.24%, Stiffness Loss: 22.86%",

            description:
                `
        <ul class="onion-list">
            <li class="pro"> Extended the side rails and deepened W-shape design while also thinning them out to save more material.</li>
            <li class="pro"> Kept the rail touching section flat like the baseline, while also helping with thickness along the length of the needle cap. This helps with tipping concerns during linear feeding raised with previous design.  
</li>
            <li class="con"> Didn’t leave enough top side surface area for upcoming factory with vacuum pick system</li>
            <li class="con"> Did not leave a perimeter around reservoir for the "second shot" injection to ensure consistent manufacture</li>
        </ul>
    `        },


        {
            image: "images/NeedleCap/Iteration-3.png",

            title: "2-Rib V1",

            meta: "Material Savings: 23.10%, Stiffness Loss: 25.04%",

            description:
                `
        <ul class="onion-list">
            <li class="pro"> Moved to 2-rib design to increase flat pickable area for top side vacuum pick system</li>
            <li class="pro"> Amended back cut-out to meet perimeter requirements and further optimized corners for loading</li>
            <li class="pro"> 2-prong design has a more efficient material to stiffness ratio.</li>
            <li class="con"> There were concerns the cap would get jammed in bowl feeders and linear rails</li>
        </ul>
    `        },

        {
            image: "images/NeedleCap/Iteration-4.png",

            title: "2-Rib V2",

            meta: "Material Savings: 23.04%, Stiffness Loss: 24.50%",

            description:
                `
        <ul class="onion-list">
            <li class="pro"> Added a chamfer outside to smoothen transitions. Between upper section and lower section (see photo below)</li>
            <li class="pro"> Hollowed out the front lip to offset material added back in</li>
            <li class="con"> It was not aesthetically pleasing</li>
            <li class="con"> Pressing surface was not smooth enough</li>
            <li class="con"> Tip deflection was high when testing by hand</li>
        </ul>
    `        },

        {
            image: "images/NeedleCap/Iteration-5.png",

            title: "Final Design",

            meta: "Material Savings: 23.40%, Stiffness Loss: 23.40%",

            description:
                `
        <ul class="onion-list">
            <li class="pro"> Reworked the tip and kept a thicker outer ring maintaining strength better at the tip, and in a wider range of forces being applied</li>
            <li class="pro"> Better integrated ribs to the tip</li>
            <li class="pro"> Further thinned out central vacuum picking surface to reduce material usage.</li>
            <li class="pro"> Expected to reduce mold fill issues at front lip</li>
        </ul>
    `
        }
    ];


    /*
     * ========================================
     * UPDATE ITERATION
     * ========================================
     */

    function updateIteration(index) {

        const iteration = iterations[index];

        const previousIndex =
            Math.max(0, index - 1);

        const previousIteration =
            iterations[previousIndex];


        /*
         * Update images
         */

        currentImage.src =
            iteration.image;

        previousImage.src =
            previousIteration.image;


        /*
         * Update technical information
         */

        iterationNumber.textContent =
            "ITERATION " + (index + 1) + " / 6";

        detailTitle.textContent =
            iteration.title;

        detailMeta.textContent =
            iteration.meta;

        detailDesc.innerHTML =
            iteration.description;


        /*
         * Onion-skin behavior
         */

        if (index === 0) {

            previousImage.style.opacity = "0";

        } else {

            previousImage.style.opacity = "0.25";

        }

    }


    /*
     * ========================================
     * SLIDER
     * ========================================
     */

    slider.addEventListener("input", function () {

        const index =
            parseInt(this.value);

        updateIteration(index);

    });


    /*
     * Initial state
     */

    updateIteration(0);

});
