class CDUSatcomMenuPage {
    static ShowPage(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;
        const activeSystem = mcdu.activeSystem;

        let selectedManualDial = false;
        let selectedStatus = false;
        let selectedDirectory = false;

        const updateView = () => {
            const getText = (name, isSelected, extra = "", isLeft = true) => isSelected ? (isLeft ? name + " (SEL)" : "(SEL) " + name) : name + extra;
            const getColor = (system, isSelected) => isSelected ? Column.cyan : system === activeSystem ? Column.green : Column.white;

            mcdu.setTemplate(FormatTemplate([
                [new Column(4, "SATCOM MAIN MENU")],
                [""],
                [""],
                [new Column(1, "SAT 1 CONNECTED")],
                [new Column(1, "OAKLAND")],
                [""],
                [""],
                [new Column(1, "SAT 2 READY TO CONNECT")],
                [new Column(1, "EUROCONTROL")],
                [""],
                [new Column(23, "MANUAL DIAL>", Column.right)],
                [new Column(1, "SATCOM")],
                [
                    new Column(0, getText("<STATUS", selectedStatus), getColor("STATUS", selectedStatus)),
                    new Column(23, "DIRECTORY>", Column.right)
                ],
            ]));
        };

        updateView();

        mcdu.setScratchpadMessage(NXSystemMessages.selectDesiredSystem);

        mcdu.onRightInput[5] = () => {
            mcdu.setScratchpadMessage(NXSystemMessages.waitForSystemResponse);
            selectedDirectory = true;
            updateView();
            setTimeout(() => {
                mcdu.removeScratchpadMessage(NXSystemMessages.waitForSystemResponse.text);
                CDUSatcomDirectoryPage.ShowPage(mcdu);
            }, Math.floor(Math.random() * 400) + 200);
        };
    }
}
