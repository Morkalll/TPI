
export const authorize = (allowedRoles = []) => (req, res, next) => 
{
    try 
    {
        const role = req.user?.role;
        if (!role) return res.status(401).json({ message: "No autenticado" });

        // allowedRoles puede ser array o string
        if (typeof allowedRoles === "string") allowedRoles = [allowedRoles];

        if (allowedRoles.length && !allowedRoles.includes(role)) 
        {
            return res.status(403).json({ message: "No tiene permisos para realizar esta acción" });
        }

        next();

    } catch (err) 
    {
        console.error("Authorize error:", err);
        return res.status(500).json({ message: "Error interno" });
    }
};
