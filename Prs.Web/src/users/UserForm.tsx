import { Link, useNavigate, useParams } from "react-router-dom";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { IUser } from "./IUser";
import { userAPI } from "./UserAPI";
import toast from "react-hot-toast";

export let emptyUser: IUser = {
  id: undefined,
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  isReviewer: false,
  isAdmin: false,
};

function UserForm() {
  const navigate = useNavigate();
  let { id } = useParams<{ id: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: async () => {
      if (!id) {
        return Promise.resolve(emptyUser);
      } else {
        const userId = Number(id);
        try {
          return await userAPI.find(userId);
        } catch (error: any) {
          toast.error(error.message);
          throw new Error("There was an error loading the user");
        }
      }
    },
  });

  const save: SubmitHandler<IUser> = async (user) => {
    if (!user.id) {
      try {
        user = await userAPI.post(user);
      } catch (error: any) {
        toast.error(error.message, { duration: 6000 });
      }
    } else {
      try {
        await userAPI.put(user);
      } catch (error: any) {
        toast.error(error.message, { duration: 6000 });
      }
    }
    toast.success("Successfully saved.");
    navigate("/users");
  };

  return (
    <form className="d-flex flex-wrap w-75 gap-2" onSubmit={handleSubmit(save)}>
      <div className="row-1 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            id="firstName"
            {...register("firstName", {
              required: "First name is required",
            })}
            type="text"
            className={`form-control ${errors?.firstName && "is-invalid"} `}
            placeholder="Enter first name"
          />
          <div className="invalid-feedback">{errors?.firstName?.message}</div>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            id="lastName"
            {...register("lastName", {
              required: "Last name is required",
            })}
            type="text"
            className={`form-control ${errors?.lastName && "is-invalid"} `}
            placeholder="Enter last name"
          />
          <div className="invalid-feedback">{errors?.lastName?.message}</div>
        </div>
      </div>
      <div className="row-2 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            className={`form-control ${errors?.email && "is-invalid"} `}
            placeholder="Enter email address"
          />
          <div className="invalid-feedback">{errors?.email?.message}</div>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            type="text"
            className={`form-control ${errors?.phone && "is-invalid"} `}
            placeholder="Enter phone number"
          />
          <div className="invalid-feedback">{errors?.phone?.message}</div>
        </div>
      </div>
      <div className="row-3 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            {...register("username", {
              required: "Username is required",
              maxLength: {
                value: 50,
                message: "Exceeded maximum length",
              },
            })}
            type="text"
            className={`form-control ${errors?.username && "is-invalid"} `}
            placeholder="Enter username"
          />
          <div className="invalid-feedback">{errors?.username?.message}</div>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 60,
                message: "Exceeded maximum length",
              },
            })}
            type="password"
            className={`form-control ${errors?.password && "is-invalid"} `}
            placeholder="Enter password"
          />
          <div className="invalid-feedback">{errors?.password?.message}</div>
        </div>
      </div>
      <div className="row-3 d-flex flex-row w-100 gap-4">
        <div className="mb-3 w-50">
          <label className="form-label">Role</label>
          <br />

          <div className="form-check form-check-inline">
            <input
              {...register("isReviewer")}
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="isReviewer" className="form-check-label">
              Reviewer
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              {...register("isAdmin")}
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="isAdmin" className="form-check-label">
              Admin
            </label>
          </div>
        </div>
      </div>

      <div className="row-4 d-flex flex-row justify-content-end w-100 gap-4">
        <div className="d-flex justify-content-end mt-4">
          <Link to={"/users"} className="btn btn-outline-primary me-2">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#FFFFFF"
            >
              <use xlinkHref={`${bootstrapIcons}#save`} />
            </svg>
            Save user
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserForm;
