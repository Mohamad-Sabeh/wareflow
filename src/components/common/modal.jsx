function Modal({ title, children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >

      <div
        className="w-full max-w-lg rounded-xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="flex items-center justify-between border-b border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-slate-900">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
          >
            ✕
          </button>

        </div>

        {children}

      </div>

    </div>
  );
}

export default Modal;