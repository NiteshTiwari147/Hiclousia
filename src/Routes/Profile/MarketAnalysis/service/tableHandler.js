function createData(position, no_of_jobs, salaryRange, no_of_companies) {
    return { position, no_of_jobs, salaryRange, no_of_companies};
}

export const getTableData = () => {
    const rows = [
        createData('SDE-1', '40K', 'a', '24K'),
        createData('SDE-2', '60K', 'b', '37K'),
        createData('SDE-3', '26K', 'c', '14K'),
        createData('Team Lead', '12K', 'd', '3.7K'),
        createData('Architect', '5K', 'e', '1.8K'),
      ];
    
    return rows;
}