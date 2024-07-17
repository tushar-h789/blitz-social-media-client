const DateOfBarth = ({ formik, years, month, getDates, ageError }) => {
  return (
    <>
      <div className="flex gap-x-1 lg:gap-x-7 mb-4">
        <select
          onChange={formik.handleChange}
          autoComplete="off"
          value={formik.values.bYear}
          onBlur={formik.handleBlur}
          name="bYear"
          className="border border-line_color w-[33%] font-gilroyNormal"
        >
          <option>Year</option>
          {years.map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <select
          onChange={formik.handleChange}
          autoComplete="off"
          value={formik.values.bMonth}
          onBlur={formik.handleBlur}
          name="bMonth"
          className="border border-line_color w-[33%] font-gilroyNormal p-2 "
        >
          <option>Month</option>
          {month.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>
        <select
          onChange={formik.handleChange}
          autoComplete="off"
          value={formik.values.bDay}
          onBlur={formik.handleBlur}
          name="bDay"
          className="border border-line_color w-[33%] font-gilroyNormal p-2"
        >
          <option>Day</option>
          {getDates.map((day, index) => (
            <option key={index}>{day}</option>
          ))}
        </select>
      </div>
      {ageError && (
        <p className="font-gilroyNormal text-red text-sm my-2">{ageError}</p>
      )}
    </>
  );
};

export default DateOfBarth;
