class CDU_CMS_MenuPage {
    static ShowPage1(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;
        mcdu.activeSystem = "CMS";

        const isOnGround = SimVar.GetSimVarValue("GEAR IS ON GROUND","Bool");
        if(!isOnGround) {
            this.ShowPage3(mcdu);
            return;
        }

        let selectedAvionicsStatus = false;
        let selectedSystemReport = false;
        let selectedPrint = true;

        const updateView = () => {
            const getColor = (system, isSelected) => isSelected ? Column.cyan : system === mcdu.activeSystem ? Column.green : Column.white;

            mcdu.setTemplate(FormatTemplate([
                [new Column(1, "MAINTENANCE MENU 1/2")],
                [new Column(1, "POST", Column.inop)],
                [
                    new Column(0, "<FLIGHT REPORT", Column.inop),
                    new Column(23, selectedPrint ? "----PRINT*" : "------SEND", Column.inop, Column.right)
                ],
                [new Column(1, "PREVIOUS", Column.inop)],
                [new Column(0, "<FLIGHT REPORT", Column.inop)],
                [""],
                [
                    new Column(0, "<AVIONICS STATUS", getColor("AVIONICS STATUS", selectedAvionicsStatus)),
                    new Column(23, selectedPrint ? "----PRINT*" : "------SEND", Column.inop, Column.right)
                ],
                [""],
                [new Column(0, "<SYSTEM REPORT/TEST", getColor("SYSTEM REPORT/TEST", selectedSystemReport))],
                [""],
                [""],
                [""],
                [new Column(0, "<UTC/DATE INIT", Column.inop)],
            ]));
        };

        updateView();

        mcdu.onUp = () => {
            this.ShowPage2(mcdu);
        };
        mcdu.onDown = () => {
            this.ShowPage2(mcdu);
        };
        mcdu.onNextPage = () => {
            this.selectedPrint = !this.selectedPrint;
            updateView();
        };

        mcdu.leftInputDelay[2] = () => {
            return mcdu.getDelaySwitchPage();
        };
        mcdu.onLeftInput[2] = () => {
            CDUCfdsAvionicsMenu.ShowPage(mcdu);
        };

        mcdu.leftInputDelay[3] = () => {
            return mcdu.getDelaySwitchPage();
        };
        mcdu.onLeftInput[3] = () => {
            CDU_CMS_TestMenu.ShowPage1(mcdu);
        };
    }

    static ShowPage2(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;

        const updateView = () => {
            mcdu.setTemplate(FormatTemplate([
                [new Column(1, "MAINTENANCE MENU 2/2")],
                [""],
                [new Column(0, "<CLASS 3 REPORT", Column.inop)],
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
        let selectedAvionicsStatus = false;
        let selectedPrint = true;

        const updateView = () => {
            const getColor = (system, isSelected) => isSelected ? Column.cyan : system === mcdu.activeSystem ? Column.green : Column.white;

            mcdu.setTemplate(FormatTemplate([
                [new Column(1, "MAINTENANCE MENU 1/1")],
                [new Column(1, "CURRENT")],
                [
                    new Column(0, "<FLIGHT REPORT", Column.inop),
                    new Column(23, selectedPrint ? "----PRINT*" : "------SEND", Column.inop, Column.right)
                ],
                [""],
                [""],
                [""],
                [
                    new Column(0, "<AVIONICS STATUS", getColor("AVIONICS STATUS", selectedAvionicsStatus)),
                    new Column(23, selectedPrint ? "----PRINT*" : "------SEND", Column.inop, Column.right)
                ],
                [""],
                [""],
                [""],
                [""],
                [""],
                [new Column(0, "<UTC/DATE INIT", Column.inop)],
            ]));
        };

        updateView();

        mcdu.onNextPage = () => {
            this.selectedPrint = !this.selectedPrint;
        };
    }
}
