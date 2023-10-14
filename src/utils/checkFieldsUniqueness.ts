import { Repository } from 'typeorm';
import User from '../entities/user.entity';

export const checkFieldsUniqueness = async (
    userRepository: Repository<User>,
    field: 'username' | 'email' | 'mobile',
    value: string
) => {
    const existingUser = await userRepository.findOne({ where: { [field]: value } });
    if (existingUser) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} is already in use`;
    }
    return;
};