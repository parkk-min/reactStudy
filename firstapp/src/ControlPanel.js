function ControlButton({ message, children }) {
    return <button onClick={() =>
        alert(message)}>{children}</button>;
};
function ControlPanel() {
    return (
        <>
            <ControlButton message="음악을 재생합니다."> ▶ Play
            </ControlButton>
            <ControlButton message="재생을 중지합니다.">▣ Stop
            </ControlButton>
        </>
    );
};

export default ControlPanel;