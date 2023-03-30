class CDUSatcomDirectoryPage {
    static ShowPage(mcdu) {
        mcdu.clearDisplay();
        mcdu.page.Current = mcdu.page.MenuPage;
        const activeSystem = mcdu.activeSystem;

        let selectedEmergency = false;
        let selectedSafety = false;
        let selectedNonSafety = false;
        let selectedPublic = false;
        let selectedReturn = false;

        const updateView = () => {
            const getText = (name, isSelected, extra = "", isLeft = true) => isSelected ? (isLeft ? name + " (SEL)" : "(SEL) " + name) : name + extra;
            const getColor = (system, isSelected) => isSelected ? Column.cyan : system === activeSystem ? Column.green : Column.white;

            mcdu.setTemplate(FormatTemplate([
                [new Column(4, "SATCOM DIRECTORY")],
                [""],
                [new Column(0, getText("<EMERGENCY", selectedEmergency), getColor("EMERGENCY", selectedEmergency))],
                [""],
                [new Column(0, getText("<SAFETY", selectedSafety), getColor("SAFETY", selectedSafety))],
                [""],
                [new Column(0, getText("<NON-SAFETY", selectedNonSafety), getColor("NON-SAFETY", selectedNonSafety))],
                [""],
                [new Column(0, getText("<PUBLIC", selectedPublic), getColor("PUBLIC", selectedPublic))],
                [""],
                [""],
                [""],
                [new Column(0, getText("<RETURN", selectedReturn), getColor("RETURN", selectedReturn))],
            ]));
        };

        updateView();

        mcdu.setScratchpadMessage(NXSystemMessages.selectDesiredSystem);

        mcdu.onLeftInput[5] = () => {
            mcdu.setScratchpadMessage(NXSystemMessages.waitForSystemResponse);
            selectedReturn = true;
            updateView();
            setTimeout(() => {
                mcdu.removeScratchpadMessage(NXSystemMessages.waitForSystemResponse.text);
                CDUSatcomMenuPage.ShowPage(mcdu);
            }, Math.floor(Math.random() * 400) + 200);
        };
    }
}
