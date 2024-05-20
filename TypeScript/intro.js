const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(user.map((eachData, index) => ({
      "sr.No": index + 1,
      "Plaza id": eachData.plaza_id,
      "name": eachData.name
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Plaza Data");

    // Generate and download the Excel file
    XLSX.writeFile(workbook, "PlazaData.xlsx");
  };