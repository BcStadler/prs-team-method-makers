import RequestLineForm from "./RequestLineForm";


function RequestCreatePage() {
  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <div className="d-flex justify-content-between pb-4 mb-5 border-bottom border-2">
        <h2>New Request Line</h2>
      </div>
      <RequestLineForm />
    </section>
  );
}

export default RequestCreatePage;
