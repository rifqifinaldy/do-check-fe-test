import styles from "./styles.module.scss";

export interface ITableColumns {
  key: string;
  title: string;
}

interface ITableProps {
  datas: any[];
  columns: ITableColumns[];
  title?: string;
}

// Render when the datas are available
const renderDataRow = ({ datas, columns }: ITableProps): JSX.Element => {
  return (
    <tbody>
      {datas.map((data, i) => (
        <tr key={i} className={styles["table-body-row"]}>
          {columns.map((column) => (
            <td key={column.key} className={styles["table-body-col"]}>
              {data[column.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

// Render When the datas length are 0
const renderNoRecords = (columns: ITableColumns[]): JSX.Element => {
  return (
    <tbody className={styles["no-records"]}>
      <tr>
        <td colSpan={columns.length} className={styles["no-record-row"]}>
          No Record Founds
        </td>
      </tr>
    </tbody>
  );
};

const Table: React.FC<ITableProps> = ({ datas, columns, title }) => {
  return (
    <>
      {title && <h6 className={styles["table-title"]}>{title}</h6>}
      <table className={styles["table"]}>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.key}>{column.title}</th>;
            })}
          </tr>
        </thead>

        {datas.length > 0
          ? renderDataRow({ datas, columns })
          : renderNoRecords(columns)}
      </table>
    </>
  );
};

export default Table;
