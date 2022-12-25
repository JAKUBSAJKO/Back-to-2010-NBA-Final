export default function Failure() {
  return (
    <div className="w-full h-screen bg-failure bg-top flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold italic text-white">Niestety!</h1>
      <p className="max-w-lg font-bold text-center italic text-white">
        Nie udało ci się odratować historii. Ale to nic straconego! Spróbuj
        ponownie!
      </p>
    </div>
  );
}
