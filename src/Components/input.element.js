import React from "react"
import TextField from "@mui/material/TextField"
import { FormControl } from "@mui/material"
import { Controller } from "react-hook-form"

function InputElement({
    name,
    label,
    type = "text",
    control,
    defaultValue = "",
    required,
    rules,
    errors,
    disabled,
    variant = "outlined",
    ...props
}) {
    return (
        <FormControl fullWidth variant={variant} style={{ marginTop: "1rem" }}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{
                    ...rules,
                    required: required,
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id={name}
                        type={type}
                        required={required}
                        helperText={errors[name] ? errors[name]?.message : null}
                        label={label}
                        error={errors[name]}
                        disabled={disabled}
                        {...props}
                    />
                )}
            />
        </FormControl>
    )
}

export default InputElement
