const WrapperDataModal = ({ title, value }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg group hover:bg-red-500">
      <p className="text-red-900 font-bold group-hover:text-white">{title}</p>
      <p className="group-hover:text-white">{value}</p>
    </div>
  );
};

export default WrapperDataModal;
