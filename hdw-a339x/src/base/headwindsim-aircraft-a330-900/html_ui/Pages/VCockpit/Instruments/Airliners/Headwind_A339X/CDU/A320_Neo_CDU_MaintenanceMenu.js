class CDUMaintenanceMenuPage {
    static ShowPage1(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;
        const activeSystem = mcdu.activeSystem;

        let selectedPostFlightReport = false;
        let selectedPreviousFlightReport = false;
        let selectedAvionicsStatus = false;
        let selectedSystemReport = false;
        let selectedUTC = false;

        const updateView = () => {
            const getText = (name, isSelected, extra = "", isLeft = true) => isSelected ? (isLeft ? name + " (SEL)" : "(SEL) " + name) : name + extra;
            const getColor = (system, isSelected) => isSelected ? Column.cyan : system === activeSystem ? Column.green : Column.white;

            mcdu.setTemplate(FormatTemplate([
                [new Column(1, "MAINTENANCE MENU 1/2")],
                [new Column(1, "POST")],
                [
                    new Column(0, getText("<FLIGHT REPORT", selectedPostFlightReport), getColor("FLIGHT REPORT", selectedPostFlightReport)),
                    new Column(23, "----PRINT*", Column.right)
                ],
                [new Column(1, "PREVIOUS")],
                [new Column(0, getText("<FLIGHT REPORT", selectedPreviousFlightReport), getColor("FLIGHT REPORT", selectedPreviousFlightReport))],
                [""],
                [
                    new Column(0, getText("<AVIONICS STATUS", selectedAvionicsStatus), getColor("AVIONICS STATUS", selectedAvionicsStatus)),
                    new Column(23, "----PRINT*", Column.right)
                ],
                [""],
                [new Column(0, getText("<SYSTEM REPORT/TEST", selectedSystemReport), getColor("SYSTEM REPORT/TEST", selectedSystemReport))],
                [""],
                [""],
                [""],
                [new Column(0, getText("<UTC/DATE INIT", selectedUTC), getColor("UTC/DATE INIT", selectedUTC))],
            ]));
        };

        updateView();

        mcdu.setScratchpadMessage(NXSystemMessages.selectDesiredSystem);

        mcdu.onUp = () => {
            this.ShowPage2(mcdu);
        };
        mcdu.onDown = () => {
            this.ShowPage2(mcdu);
        };
    }

    static ShowPage2(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;
        const activeSystem = mcdu.activeSystem;
        let selectedClass3Report = false;

        const updateView = () => {
            const getText = (name, isSelected, extra = "", isLeft = true) => isSelected ? (isLeft ? name + " (SEL)" : "(SEL) " + name) : name + extra;
            const getColor = (system, isSelected) => isSelected ? Column.cyan : system === activeSystem ? Column.green : Column.white;

            mcdu.setTemplate(FormatTemplate([
                [new Column(1, "MAINTENANCE MENU 2/2")],
                [""],
                [new Column(0, getText("<CLASS 3 REPORT", selectedClass3Report), getColor("CLASS 3 REPORT", selectedClass3Report))],
                [""],
                [""],
                [""],
                [""],
                [""],
                [""],
                [""],
                [""],
                [""],
                [""],
            ]));
        };

        updateView();

        mcdu.setScratchpadMessage(NXSystemMessages.selectDesiredSystem);

        mcdu.onUp = () => {
            this.ShowPage1(mcdu);
        };
        mcdu.onDown = () => {
            this.ShowPage1(mcdu);
        };
    }

    static ShowPage3(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;
        const activeSystem = mcdu.activeSystem;

        let selectedPostFlightReport = false;
        let selectedAvionicsStatus = false;
        let selectedUTC = false;

        const updateView = () => {
            const getText = (name, isSelected, extra = "", isLeft = true) => isSelected ? (isLeft ? name + " (SEL)" : "(SEL) " + name) : name + extra;
            const getColor = (system, isSelected) => isSelected ? Column.cyan : system === activeSystem ? Column.green : Column.white;

            mcdu.setTemplate(FormatTemplate([
                [new Column(1, "MAINTENANCE MENU 1/1")],
                [new Column(1, "CURRENT")],
                [
                    new Column(0, getText("<FLIGHT REPORT", selectedPostFlightReport), getColor("FLIGHT REPORT", selectedPostFlightReport)),
                    new Column(23, "----PRINT*", Column.right)
                ],
                [""],
                [""],
                [""],
                [
                    new Column(0, getText("<AVIONICS STATUS", selectedAvionicsStatus), getColor("AVIONICS STATUS", selectedAvionicsStatus)),
                    new Column(23, "----PRINT*", Column.right)
                ],
                [""],
                [""],
                [""],
                [""],
                [""],
                [new Column(0, getText("<UTC/DATE INIT", selectedUTC), getColor("UTC/DATE INIT", selectedUTC))],
            ]));
        };

        updateView();

        mcdu.setScratchpadMessage(NXSystemMessages.selectDesiredSystem);
    }
}
