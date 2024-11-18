import React, { useState } from 'react';
import useUserApi from '../../hooks/apis/useUserApi';

interface FormValues {
    name: string;
    mobile: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface RegistrationModalProps {
    onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { addUserDetail } = useUserApi();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validateForm = () => {
        let errors: Partial<FormValues> = {};

        if (!formValues.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formValues.mobile.trim()) {
            errors.mobile = 'Mobile is required';
        } else if (!/^\d{10}$/.test(formValues.mobile)) {
            errors.mobile = 'Mobile number must be 10 digits';
        }
        if (!formValues.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            errors.email = 'Email is not valid';
        }
        if (!formValues.password) {
            errors.password = 'Password is required';
        } else if (formValues.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (formValues.confirmPassword !== formValues.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                await addUserDetail(formValues);
                alert('User registered successfully!');
                setFormValues({
                    name: '',
                    mobile: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                onClose();
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Failed to register user');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="z-30 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4">User Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields */}
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                        {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Mobile</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formValues.mobile}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                        {formErrors.mobile && <p className="text-red-500 text-sm">{formErrors.mobile}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                        {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                        />
                        {formErrors.confirmPassword && <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationModal;