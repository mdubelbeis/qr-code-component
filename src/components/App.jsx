import qrCode from '../assets/images/image-qr-code.png';

const App = () => {
  return (
    <main className="p-4 bg-pure-white rounded-xl shadow-md max-w-xs">
      <div className="space-y-4 text-center">
        <img className="rounded-xl" src={qrCode} alt="QR Code" />
        <section className="space-y-4 p-4 text-center">
          <h1 className="font-bold text-xl">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-grayish-blue text-[15px]">
            Scan the QR code to visit Frontend Mentor and take your
            coding skillst to the next level
          </p>
        </section>
      </div>
    </main>
  );
};

export default App;
