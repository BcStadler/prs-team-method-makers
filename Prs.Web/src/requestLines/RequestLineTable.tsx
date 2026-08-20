import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IRequestLine } from "../requestLines/IRequestLine";
import { Link } from "react-router-dom";

interface RequestLineTableProps {
  requestId?: number;
  requestLines: IRequestLine[];
  onRemove: (requestLine: IRequestLine) => void;
}

function RequestLineTable({
  requestId,
  requestLines,
  onRemove,
}: RequestLineTableProps) {
  const total = calculateTotal();

  function calculateTotal() {
    if (!requestLines) return 0;
    const total = requestLines
      .map((requestLine) => {
        const amount = requestLine.product?.price ?? 0;
        return amount;
      })
      .reduce((accumulator, amount) => {
        return accumulator + amount;
      }, 0);
    return total;
  }

  return (
    <div className="card p-4 mt-5">
      <h5 className="card-title">Items</h5>
      <table className="table w-75">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {requestLines.map((requestLine: IRequestLine) => {
            return (
              <tr key={requestLine.id}>
                <td>{requestLine.product?.name}</td>
                <td>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(requestLine.product?.price ?? 0)}
                </td>
                <td>{requestLine.quantity}</td>
                <td>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    (requestLine.product?.price ?? 0) * requestLine.quantity
                  )}
                </td>
                <td>
                  <Link
                    to={`/requests/detail/${requestId}/requestline/edit/${requestLine.id}`}
                    className="btn btn-outline"
                  >
                    <svg
                      className="bi pe-none me-2"
                      width={16}
                      height={16}
                      fill="#007AFF"
                    >
                      <use xlinkHref={`${bootstrapIcons}#pencil`} />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={async () => {
                      if (
                        confirm(
                          "Are you sure you want to delete this line item?"
                        )
                      ) {
                        onRemove(requestLine);
                      }
                    }}
                  >
                    <svg
                      className="bi pe-none me-2"
                      width={16}
                      height={16}
                      fill="#007AFF"
                    >
                      <use xlinkHref={`${bootstrapIcons}#trash`} />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Link
                to={`/requests/detail/${requestId}/requestline/create`}
                className="btn btn-outline-primary"
              >
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  fill="#007AFF"
                >
                  <use xlinkHref={`${bootstrapIcons}#plus-circle`} />
                </svg>
                Add a line
              </Link>
            </td>
            <td>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default RequestLineTable;
