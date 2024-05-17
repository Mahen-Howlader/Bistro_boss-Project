function Sectiontitle({heading,subHeading}) {
    return (
        <div className="flex justify-center mt-20">
          <div className="text-center">
          <p className="text-yellow-500">{subHeading}</p>
            <p  className="text-3xl border-y-2 font-semibold py-2 my-5">{heading}</p>
          </div>
        </div>
    );
}

export default Sectiontitle;